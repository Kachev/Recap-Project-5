import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";


const StyleList = styled.li`
  list-style-type: none;
`;

export default function ArtPieces({ pieces }) {
  
  


  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <StyleList key={piece.slug}>
            <div>
              <Link href={`/pieces/${piece.slug}`}><Image
              src={piece.imageSource}
              alt={piece.slug}
              width={200}
              height={200}
            />
                
              </Link>
             <p>{piece.name} by {piece.artist}</p> 
            </div>
            
          </StyleList>
        ))}
      </ul>
    </>
  );
}
