"use client"

import {useRouter} from 'next/navigation'


function Button({children, onClick}){
    return (
      <button
        className='border-2 border-solid p-[10px] border-white inline-block'
        onClick={onClick}
      >
        {children}
      </button>
    )
  }


  export default function ButtonGroup(){
    const router = useRouter()
   
    return (
        <div className = "flex flex-row">
     
            <Button onClick={() => router.back()}>뒤로 가기</Button>
            <Button onClick={() => router.refresh()}>새로고침</Button>
            <Button onClick={() => router.forward()}>앞으로 가기</Button>
            

        </div>
     
    )
  }