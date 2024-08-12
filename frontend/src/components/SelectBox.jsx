import React from 'react'

export const SelectBox = () => {
  return (
    <div>
      <select name="countryCode" id="" className='rounded-lg py-3 px-2 text-[18px] text-gray-800 outline-[#06425f] border p-2'>
        <option value="+91" selected>+91</option>
        <option value="93">93</option>
        <option value="94">94</option>
        <option value="95">95</option>
        <option value="96">96</option>
      </select>
    </div>
  )
}
