import NextJs from "@modules/ecommerce/common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <p className="font-helvetica-neue flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a>
    </p>
  )
}

export default MedusaCTA
