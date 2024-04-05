


const MainBox = ({person}) => {
  return (
      <div className="bg-[#ffffff] p-3 rounded-[15px] shadow-[1px_4px_4px_1px_rgba(85,85,85,0.25)]">
     
        {person.length ? (
            person.map(item=>{
              return(
                <div key={item.id} className={"flex items-center gap-3 border-b-2 border-gray-300 py-2"}>
                <div>
                  <img
                    src={"/src/profile-1.jpg"}
                    alt={"profile"}
                    className={"w-[60px] h-[60px] rounded-[50%]"}
                  />
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm">{item.date}</p>
                </div>
              </div>
              )
            })
          ) : <h1>لايوجد مواعيد اليوم</h1>}
      </div>
  )
}

export default MainBox