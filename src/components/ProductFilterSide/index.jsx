import React from 'react'
import { dataContext } from '../../contexts/ProductContext';
import { useContext,useEffect,useState } from 'react';
import { BASE_URL, network } from '../../api/axiosinstance';
import "./style.css"
import { Checkbox } from 'antd';

function ProductFilterSide({selectCatagory,setSelectCatagory}) {
    const { categories,data } = useContext(dataContext)
    const onChange = (e) => {
        if(e.target.checked){
            setSelectCatagory([...selectCatagory,e.target.value])
        }else{
            setSelectCatagory(()=>{
                return selectCatagory.filter(q=>q!==e.target.value)
            })
        }
       
      };
      
  return (
    <div className='side'>
      <div className='catagories'>
        <div className='row'>
            <div className='catagoryname'>Catagories</div>
            <div className='catagorycount'>Reset</div>
        </div>
        {
            categories && (
                categories.map((item,i)=>(
                    <div className='row' key={i}>
                    <div ><Checkbox className='catagory' value={item} onChange={onChange}>{item}</Checkbox></div>
                    {
                       data && (
                        <div className='catagory'>{data.filter((q)=>q.catagory==item).length}</div>
                       ) 
                    }
                </div>
                ))
            )
        }
     
        {/* <div className='row'>
            <div><Checkbox onChange={onChange}>Tablet</Checkbox></div>
            <div>Reset</div>
        </div>
        <div className='row'>
            <div><Checkbox onChange={onChange}>Headphones</Checkbox></div>
            <div>Reset</div>
        </div>
        <div className='row'>
            <div><Checkbox onChange={onChange}>Console</Checkbox></div>
            <div>Reset</div>
        </div> */}
      </div>
    </div>
  )
}

export default ProductFilterSide
