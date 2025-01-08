import { Button } from "@nextui-org/react"
import Link from "next/link"

const InvestigationGroup = () => {
  return (
    <main className="flex flex-col gap-y-12 py-6 items-center">
      <section className="min-h-[500px] border border-dark flex flex-col justify-center items-start px-20 w-full">
        <p>Ceinfes</p>
        <h2 className="text-[84px] font-semibold">Grupo de investigación</h2>
      </section>
      <Button
        as={Link}
        href="investigation-group/publications"
        variant="solid"
        className="bg-secondary text-white"
        size="lg"
      >
        Ir a publicaciones
      </Button>
    </main>
  )
}

export default InvestigationGroup
