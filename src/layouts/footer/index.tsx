export function Footer() {
  return (
    <footer>
      <div
        className="h-screen md:h-80 md:w-full bg-cover bg-center relative  "
        style={{
          backgroundImage: `
            url('./images/bg-footer.jpg'),
              linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
              linear-gradient(180deg, rgba(0, 10, 255, 0.5) 0%, rgba(0, 0, 0, 0) 136.61%)
            `,
        }}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 inset-0 bg-gradient-to-b to-black from-blue-800 opacity-90 px-10 md:px-36 pt-16  ">
          <div className="grid grid-col-1 md:grid-cols-5 h-full  text-white ">
            <div className="col-span-2 flex flex-col ">
              <div>
                <img className="h-24" src="./logo.png" alt="" />
              </div>
              <div className="flex gap-4 pt-5">
                <img className="h-11 " src="./icons/ant-x.png" alt="" />
                <img className="h-11 " src="./icons/ant-fb.png" alt="" />
                <img className="h-11 " src="./icons/ant-in.png" alt="" />
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h1 className="font-semibold text-xl">Địa chỉ</h1>
                <div className="flex gap-2 pt-6 text-sm">
                  <img className="h-8" src="./icons/location.png" alt="" />
                  <div className="flex flex-col gap-3">
                    <span>
                      Valletta Buildings, South Street, Valletta - VLT 1103
                      Malta, Mỹ
                    </span>
                    <span>
                      Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà
                      Nẵng, Việt Nam
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 pt-5 text-sm items-center">
                  <img className="h-8" src="./icons/mobile.png" alt="" />
                  <div className="flex flex-col gap-4">
                    <span>(+1) 555-0108-000 hoặc (+236) 555-0108</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-xl">Theo dõi</h1>
                <div className="flex gap-2 pt-6 text-sm">
                  <span>
                    Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết
                    về các cập nhật của chúng tôi
                  </span>
                </div>
                <div className="flex items-center border border-gray-300 rounded-md mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-3 px-4 w-full focus:outline-none bg-transparent text-white"
                  />
                  <button className=" text-white rounded-r-md px-5 text-xl">
                    <img  src="./icons/arrow-right.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-10 bg-black">
        <span className="text-gray-400 ">2017 Copyright. Policy.</span>
      </div>
    </footer>
  );
}
