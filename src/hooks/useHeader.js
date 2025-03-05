import { useState, useCallback, useEffect } from "react";

const useHeader = () => {
    // 검색어 상태 관리State
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 입력값 상태 업데이트
  const OnChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // 엔터키 이벤트
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(""); // 검색 후 입력 필드 초기화
  };

  // 메뉴 열기/닫기
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 사이드 메뉴 영역에 마우스가 들어갔을 때
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // 사이드 메뉴 영역에서 마우스가 나갔을 때
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 스크롤 방지
  const preventScroll = (e) => {
    if (isMenuOpen) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener("wheel", preventScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", preventScroll);
    }

    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isHovered) {
      setIsMenuOpen(false);
    }
  }, [isHovered]);

  return {
    searchTerm,
    isMenuOpen,
    // isHovered,
    OnChange,
    handleSubmit,
    toggleMenu,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHeader;