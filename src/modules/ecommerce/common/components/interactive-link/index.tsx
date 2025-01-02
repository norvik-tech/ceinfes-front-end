import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="flex gap-x-1 items-center group"
      href={href}
      onClick={onClick}
      {...props}
    >
      <p className="font-helvetica-neue text-ui-fg-interactive">{children}</p>
      <i
        className="icon-[mingcute--arrow-right-up-line] group-hover:rotate-45 ease-in-out duration-150"
        role="img"
        aria-hidden="true"
        color="var(--fg-interactive)"
      ></i>
    </LocalizedClientLink>
  )
}

export default InteractiveLink
