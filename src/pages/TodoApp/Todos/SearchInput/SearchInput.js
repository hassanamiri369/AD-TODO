import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import { Button } from '@mui/material'

import { BiSearchAlt } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';

import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
// style
import "./Style.css"


const customStyles = {
    content: {
        width: "400px",
        height : "300px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display : "flex",
        flexDirection : "column",
        background : "lightBlue",
        lineHeight : "50px",
        
  
    },

    span : {
        // background : "red",
        fontSize : "26px",
        display : "flex",
        justifyContent : "flex-end",
        cursor: "pointer",
    }
};

const SearchInput = ({ todos }) => {

    const [searchList, setSearchList] = useState([])
    const [search, setSearch] = useState("")

    const handelSearch = (e) => {
        setSearch(e.target.value)
        const newSearch = todos && todos.filter(value => value.title.toLowerCase().includes(search.toLowerCase()))

        setSearchList(newSearch)
    }

    useEffect(() => {
        if (search === "") {
            setSearchList([])
        }
    }, [search])

    const handelClickCloseSearch = () => {
        setSearch("")
        setSearchList([])
    }

    let subtitle;
    const [product, setProduct] = useState(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const setModal = (item) => {
        setProduct(item)
    }
    function openModal() {
        setIsOpen(true);
        setSearch("")
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

   
    const CloseModal = ()=> setIsOpen(false)

  


    return (
        <div className='search-item'>

            <div className='search-parent'>

                <div className='input-icons'>
                    <span className='search-close-icon'> {search ? <AiFillCloseCircle onClick={() => handelClickCloseSearch()} /> : <BiSearchAlt />}</span>
                    <input value={search} onChange={(e) => handelSearch(e)} type={'text'} placeholder="search category" />
                </div>
            </div>
            <div >

                <div className={`${search ? "show-search-result" : ""}`}>

                    <div className='show-result'>
                        {searchList && searchList.map(item => <div key={item.id}>
                            <p onClick={openModal}>{item.title} {" "}<span onClick={() => setModal(item)}><BsFillArrowUpRightCircleFill /></span></p>

                        </div>

                        )}
                    </div>

                    <div>
                        {product &&
                            <div>
                                <Modal
                                
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={CloseModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >

                                    <span  style={customStyles.span} ><AiFillCloseCircle onClick={CloseModal} /></span>
                                    <p>{product.category}</p>
                                    <p>{product.title}</p>
                                    <p>{product.body}</p>
                                    <p>{product.description}</p>

                                </Modal>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInput