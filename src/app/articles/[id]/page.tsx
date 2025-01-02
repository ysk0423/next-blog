import { getDetailArticle } from "@/blogAPI"
import Image from "next/image"

const Article = async ({params}: {params: {id: string}}) => {
  const detailArticle = await getDetailArticle(params.id)
  return (
    <div className="max-w-3x1 mx-auto p-5">
      {/* 2207863 */}
      <Image
        src={`https://unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
        alt="image"
        width={1280}
        height={300}
      />
      <h1 className="text-4x1 text-center mb-10 mt-10">{detailArticle.title}</h1>
      <div className="text-1g leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
    </div>
  )
}

export default Article