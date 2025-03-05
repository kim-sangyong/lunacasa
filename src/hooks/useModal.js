import { useState } from "react";

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 상태
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // 로그인모달 상태;

    // 모달 열기
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // 로그인 모달 열기
    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    }
    // 로그인 모달 닫기
    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    }

    return { isModalOpen, openModal, closeModal, isLoginModalOpen, openLoginModal, closeLoginModal };
};

export default useModal;