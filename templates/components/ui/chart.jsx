import * as React from "react"
import * as RechartsPrimitive from "recharts"

const THEMES = { light: "", dark: ".dark" }

export const ChartContext = React.createContext({
  config: {},
})

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId()
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          ref={ref}
          className={`flex aspect-auto h-80 w-full flex-col ${className}`}
          {...props}
        >
          <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
            {React.cloneElement(children, {
              ...children.props,
              margin: {
                top: 5,
                right: 10,
                bottom: 5,
                left: 10,
                ...children.props?.margin,
              },
            })}
          </RechartsPrimitive.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).reduce((acc, [key, itemConfig]) => {
    const color = itemConfig.theme?.light || itemConfig.color

    acc += `
    --color-${key}: ${color};
  `
    return acc
  }, "")

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
    :root {
      ${colorConfig}
    }
  `,
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef(
  ({ active, payload, label, labelFormatter, formatter, color, nameKey, labelKey }, ref) => {
    if (!active || !payload || payload.length === 0) {
      return null
    }

    return (
      <div
        ref={ref}
        className="rounded-lg border border-border/50 bg-background px-2 py-1.5 text-sm shadow-md"
      >
        {label && (
          <div className="text-muted-foreground">
            {labelFormatter ? labelFormatter(label) : label}
          </div>
        )}
        <div className="grid grid-cols-2 gap-2">
          {payload.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex w-24 flex-col"
            >
              <span
                className="text-xs"
                style={{
                  color: item.color || "hsl(var(--foreground))",
                }}
              >
                {formatter ? formatter(item.value) : item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent }
