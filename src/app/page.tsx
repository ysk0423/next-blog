import Link from "next/link";
import ArticleList from "./components/ArticleList";

export default function Home() {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList />
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-600">
            aaa bbb ccc ddd eee fff ggg hhh iii jjj kkk lll mmm nnn ooo.
          </p>
        </div>
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Category</h3>
          <ul className="text-gray-600 mt-2">
            <li>
              <Link href="#">Technology</Link>
            </li>
            <li>
              <Link href="#">Automotive</Link>
            </li>
            <li>
              <Link href="#">Finance</Link>
            </li>
            <li>
              <Link href="#">Sports</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
