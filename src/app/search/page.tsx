import { title } from "@/app/_components/primitives";
import { Divider } from "@nextui-org/divider";
import { Textarea } from "@nextui-org/input";
export default function Search() {
    return (
        <section className="flex items-center justify-items-center justify-center mt-20">
			<div className="max-w-lg text-center justify-center gap-4 mt-28">
            <h1 className={title({ color: 'violet' })}>Search&nbsp;</h1>
				<h1 className={title()}>through all</h1>
                <Divider className="my-4  opacity-0"/>
                    <Textarea
                        minRows={1}
                        color="primary"
                        variant="bordered"
                        className="  w-unit-9xl   pr-14  "
                        size="lg"
                        />
            </div>
        </section>
    )
}