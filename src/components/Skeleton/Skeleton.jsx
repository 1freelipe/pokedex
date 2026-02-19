import React from 'react';
import { SkeletonBase, SkeletonCard } from './styled';

export default function LoadingSkeleton() {
  return (
    <SkeletonCard>
      {/* Imitando a IMAGEM do Pokemon */}
      <SkeletonBase width="200px" height="200px" borderRadius="50%" />

      {/* Imitando o NOME */}
      <SkeletonBase width="80%" height="25px" borderRadius="4px" />

      {/* Imitando os TIPOS (pequenas pílulas) */}
      <div
        style={{
          display: 'grid',
          gap: '25px',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <SkeletonBase width="60px" height="20px" borderRadius="10px" />
        <SkeletonBase width="60px" height="20px" borderRadius="10px" />
        <SkeletonBase width="60px" height="20px" borderRadius="10px" />
        <SkeletonBase width="60px" height="20px" borderRadius="10px" />
      </div>
    </SkeletonCard>
  );
}
