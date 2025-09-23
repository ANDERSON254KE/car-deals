from django.contrib import admin
from django.utils.html import format_html
from .models import SocialAccount, SocialPost


@admin.register(SocialAccount)
class SocialAccountAdmin(admin.ModelAdmin):
    list_display = ('platform', 'is_active', 'auto_post_new_cars', 'connected_at', 'last_used')
    list_filter = ('platform', 'is_active', 'auto_post_new_cars')
    readonly_fields = ('connected_at', 'last_used')
    
    fieldsets = (
        ('Platform Details', {
            'fields': ('platform', 'api_token', 'page_id')
        }),
        ('Settings', {
            'fields': ('is_active', 'auto_post_new_cars', 'post_template')
        }),
        ('Timestamps', {
            'fields': ('connected_at', 'last_used'),
            'classes': ('collapse',)
        }),
    )

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if not obj:  # New object
            form.base_fields['post_template'].help_text += "<br><strong>Default templates will be used if left blank.</strong>"
        return form


@admin.register(SocialPost)
class SocialPostAdmin(admin.ModelAdmin):
    list_display = ('car', 'platform', 'status', 'attempts', 'created_at', 'posted_at', 'post_link')
    list_filter = ('platform', 'status', 'created_at', 'posted_at')
    search_fields = ('car__make', 'car__model', 'content')
    readonly_fields = ('created_at', 'posted_at', 'post_link_display')
    
    fieldsets = (
        ('Post Details', {
            'fields': ('car', 'account', 'platform')
        }),
        ('Content', {
            'fields': ('content', 'post_id', 'post_url')
        }),
        ('Status', {
            'fields': ('status', 'error_message', 'attempts', 'max_attempts')
        }),
        ('Scheduling', {
            'fields': ('scheduled_for',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'posted_at', 'post_link_display'),
            'classes': ('collapse',)
        }),
    )

    def post_link(self, obj):
        if obj.post_url:
            return format_html('<a href="{}" target="_blank">View Post</a>', obj.post_url)
        return "Not posted"
    post_link.short_description = "Post Link"

    def post_link_display(self, obj):
        if obj.post_url:
            return format_html('<a href="{}" target="_blank">{}</a>', obj.post_url, obj.post_url)
        return "Not available"
    post_link_display.short_description = "Post URL"

    actions = ['retry_failed_posts', 'cancel_pending_posts']

    def retry_failed_posts(self, request, queryset):
        failed_posts = queryset.filter(status='failed')
        updated = failed_posts.update(status='pending', attempts=0, error_message='')
        self.message_user(request, f'{updated} failed posts reset for retry.')
    retry_failed_posts.short_description = "Retry failed posts"

    def cancel_pending_posts(self, request, queryset):
        pending_posts = queryset.filter(status='pending')
        updated = pending_posts.update(status='cancelled')
        self.message_user(request, f'{updated} pending posts cancelled.')
    cancel_pending_posts.short_description = "Cancel pending posts"