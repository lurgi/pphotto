import { useState } from "react";
import Button from "../common/Button";
import S from "./style";

import { RiFolderTransferLine } from "react-icons/ri";
import PromptModal from "../common/PromptModal";

const PhotoControls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.Container>
      <Button onClick={() => setIsModalOpen(true)}>
        <RiFolderTransferLine size={28} />
        <S.Description>이미지 변환</S.Description>
      </Button>

      {/*<--MODAL--> */}
      <PromptModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </S.Container>
  );
};

export default PhotoControls;
