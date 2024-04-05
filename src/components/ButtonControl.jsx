


const ButtonControl = ({deleteData , viwData}) => {
  return (
    <div className="flex justify-between my-[9px]">
        <button onClick={deleteData} className="bg-blue-500 hover:bg-blue-400 transition-colors duration-200 text-white p-[5px] rounded-[7px]">
          مسح الكل
        </button>
        <button onClick={viwData} className="bg-blue-500 hover:bg-blue-400 transition-colors duration-200 text-white p-[5px] rounded-[7px]">
          عرض المواعيد
        </button>
      </div>
  )
}

export default ButtonControl


