import { getDetailArticle } from "@/blogAPI"
import Image from "next/image"

const Article = async ({params}: {params: {id: string}}) => {
  const detailArticle = await getDetailArticle(params.id)
  return (
    <div className="max-w-3x1 mx-auto p-5">
      <Image
        src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
        alt="image"
        width={1280}
        height={300}
      />
      <h1 className="text-4x1 text-center mb-10 mt-10">ここがタイトルです。</h1>
      <div className="text-1g leading-relaxed text-justify">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum minima neque quia, obcaecati laudantium corrupti provident ipsum itaque tenetur odio reiciendis praesentium voluptates maxime quasi, nobis earum veritatis culpa!</p>
      </div>
    </div>
  )
}

export default Article