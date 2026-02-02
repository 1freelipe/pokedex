import React from 'react';
import styled from 'styled-components';
import { SkeletonBase } from './styled'; // Importe de onde criou acima

const SkeletonCard = styled.div`
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export default function LoadingSkeleton() {
  return (
    <SkeletonCard>
      {/* Imitando a IMAGEM do Pokemon */}
      <SkeletonBase width="150px" height="150px" borderRadius="50%" />

      {/* Imitando o NOME */}
      <SkeletonBase width="80%" height="25px" borderRadius="4px" />

      {/* Imitando os TIPOS (pequenas pílulas) */}
      <div style={{ display: 'flex', gap: '5px' }}>
        <SkeletonBase width="60px" height="20px" borderRadius="10px" />
        <SkeletonBase width="60px" height="20px" borderRadius="10px" />
      </div>
    </SkeletonCard>
  );
}
