import DeleteButton from "@/app/components/DeleteButton"
import { getDetailArticle } from "@/blogAPI"
import Image from "next/image"

const Article = async ({params}: {params: {id: string}}) => {
  const detailArticle = await getDetailArticle(params.id)
  return (
    <div className="max-w-3x1 mx-auto p-5">
      <Image
        src="https://picsum.photos/200"
        alt="image"
        width={1280}
        height={300}
      />
      <h1 className="text-4x1 text-center mb-10 mt-10">{detailArticle.title}</h1>
      <div className="text-1g leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  )
}

export default Article