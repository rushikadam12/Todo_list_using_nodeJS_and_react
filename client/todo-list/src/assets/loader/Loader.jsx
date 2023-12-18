import React from 'react'
import { Dna } from 'react-loader-spinner'
export const Loader = () => {
  return (
    <>
    <Dna
            visible={true}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperClass="dna-wrapper"
            color="red"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
            />
    </>
  )
}
