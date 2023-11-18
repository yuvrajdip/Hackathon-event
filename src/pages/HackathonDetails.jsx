import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const HackathonDetails = () => {
  const {blogId} = useParams();
  console.log(blogId);


  const allData = useLoaderData();
  // const [allData, setAllData]= useState();
  const [selectedData , setSelectedData]= useState({});

  // useEffect(()=>{
  //   fetch('/public/data.json')
  //   .then(res=>res.json())
  //   .then(data=>setAllData(data))
  // },[blogId]);

  console.log(allData);

  useEffect(()=>{
    const y= allData.find( x=> x.blogId == blogId);
    setSelectedData(y);
  },[blogId, allData]);

  console.log(selectedData);

  const {blogImg, blogAuthor, blogUpdateTime , blogDetail , blogTitle } = selectedData;

  return (
    <div className='border border-r-0 border-b-0 border-t-1 border-l-8 border-l-yellow-600 border-t-yellow-600 w-3/4 mx-auto pt-0 p-10'>
      
      <img className='w-1/2 mx-auto' src={blogImg} alt="" />
      <h2 className='text-4xl my-4'>{blogTitle}</h2>
      <p className='text-xl'>{blogDetail}</p>
      <p className='my-5'>Published : {blogUpdateTime}</p>
      <p>Author : {blogAuthor}</p>
    </div>
  );
};

export default HackathonDetails;