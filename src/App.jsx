
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Images from './components/images'
import Buttons from './components/Buttons'

const App = () => {

  const [userdata, setuserdata] = useState([])
  let [page, setpage] = useState(1)

  async function getdata() {
    let res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    setuserdata(res.data);
    console.log(res.data);
  }

  let printdata = <h3 className='text-2xl text-gray-500 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 flex justify-center align-center'>LOADING....</h3>

  if (userdata.length > 0) {
    printdata = userdata.map((elem, idx) => {
      return <div key={idx}>
        <Images elem={elem} />
      </div>
    })
  }

  useEffect(() => {
    getdata();

  }, [page])


  return (

    <div className='bg-black h-screen w-screen text-white overflow-auto'>

      <div className='flex flex-wrap gap-4 m-4 p-4 pb-24'>
        {printdata}
      </div>
      <Buttons page={page} setpage={setpage} setuserdata={setuserdata} />
    </div>
  )
}

export default App