import React,{useMemo} from 'react'

const Timestamp = ({timestamp}) =>{
    const dateString = useMemo(()=>{
        const dateObj = new Date(timestamp)
        return `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`
      },[timestamp])
    return (
        <div>
            <p>日付：{dateString}</p>
            
        </div>
    )
}

export default Timestamp
