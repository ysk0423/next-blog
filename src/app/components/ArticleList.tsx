import Image from "next/image"
import Link from "next/link"

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt="image"
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By hogehoge, Published on 2024/02/11</p>
          <Link href="#">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium illum magnam repudiandae neque quaerat, nostrum impedit, eveniet hic assumenda unde mollitia officiis! Omnis accusamus consequatur voluptatum voluptate maiores ipsa quae!
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList