import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Breadcrumbs = () => {
    return (
        <>
            <Breadcrumb className='breadcrumb breadcrumbs'>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    Terms of Use
                </Breadcrumb.Item>

            </Breadcrumb>
        </>
    )
}

export default Breadcrumbs
