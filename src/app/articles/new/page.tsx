
const CreateBlogPage = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>

      <form className="bg-slate-200 p-6 rounded shadow-lg">
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none"/>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
          <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none"/>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none"/>
        </div>

        <div className="text-right">
          <button 
            type="submit"
            className="py-2 px-4 ml-auto border rounded-md bg-orange-300">
              投稿
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default CreateBlogPage