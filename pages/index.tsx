export default function Home() {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-2xl font-bold">
      Sleep record
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://i.gyazo.com/ad13e228541bbaf6952f447cce456dc2.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">テストタイトル</div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              # テストタグ
            </span>
          </div>
        </div>
      </div>
    </>
  )
}