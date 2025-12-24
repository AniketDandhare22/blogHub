function BlogCard(elem) {
  return (
    <div className={` rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition m-4 max-w-[900px]  bg-primaryD light:bg-primary ${!elem.theme? "light":""}`}>
      
      {/* Image */}
      <div className="w-full h-70 overflow-hidden object-cover">
        <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
            alt="blog"
            className="w-full hover:scale-105 transition-transform duration-200 ease-in-out "
            />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Tag */}
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white">
          technology
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold light:text-txPrimary text-white leading-snug">
          Getting Started with React and TypeScript
        </h3>

        {/* Description */}
        <p className="text-sm light:text-txSecondary text-txSecondaryD leading-relaxed">
          Learn how to build robust applications using React with TypeScript.
          Covers type safety, best practices, and scalable patterns.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore exercitationem numquam? Expedita commodi dolor itaque maxime. Eaque, libero iste!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ducimus nobis voluptates fugiat laboriosam culpa repellendus tenetur quisquam, consectetur, iste alias tempore natus modi voluptate similique quam numquam ullam obcaecati.
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
          <div className="flex items-center gap-2">
            <span>👤 Sarah Johnson</span>
            <span>• Dec 10, 2025</span>
          </div>
          <span>⏱ 8 min read</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-3">
          <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg text-white light:text-black light:bg-secondary bg-secondaryD/70 light:hover:bg-gray-200  hover:bg-secondaryD transition">
            ❤️ 245
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg text-white light:text-black light:bg-secondary bg-secondaryD/70 light:hover:bg-gray-200  hover:bg-secondaryD  transition">
            🔗 Share
          </button>
        </div>
      </div>
    </div>
  );
}


export default BlogCard