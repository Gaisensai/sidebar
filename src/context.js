import React, { useState, useContext, createContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = ()=>{
        setIsSideBarOpen(true);
    };

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <AppContext.Provider 
        value={{ 
            isSideBarOpen, 
            isModalOpen,
            openSideBar,
            openModal,
            closeSideBar,
            closeModal,
            }}>
                {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext =()=>{
    return useContext(AppContext);
};

export {AppContext, AppProvider};