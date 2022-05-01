import Image from "next/image";

import { MembersMain, Title, BoxMembers, Box } from "../Members/Members.styled";

export default function Members() {
  return (
    <MembersMain>
      <Title>
        <h4>Conheça a equipe</h4>
      </Title>
        <BoxMembers>
          <Box>
            <Image
              src="/kurt.jpeg"
              alt="Foto do membro da empresa"
              width={325}
              height={350}
            />
            <p>Kurt Cobain - Vocalista do Nirvana e UX/UI</p>
          </Box>
          <Box>
            <Image
              src="/amy.jpeg"
              alt="Foto do membro da empresa"
              width={325}
              height={350}
            />
            <p>Amy Winehouse - Cantora e Social Midia</p>
          </Box>
          <Box>
            <Image
              src="/bob.jpeg"
              alt="Foto do membro da empresa"
              width={325}
              height={350}
            />
            <p>Bob Marley - Rei do reggae e Rh</p>
          </Box>
          <Box>
            <Image
              src="/janis.jpeg"
              alt="Foto do membro da empresa"
              width={325}
              height={350}
            />
            <p>Janis Joplin - Cantora e Marketing</p>
          </Box>
          <Box>
            <Image
              src="/jimmy.jpeg"
              alt="Foto do membro da empresa"
              width={325}
              height={350}
            />
            <p>Jimi Hendrix - Guitarstar e Full Stack Developer </p>
          </Box>
        </BoxMembers>
    </MembersMain>
  );
}
