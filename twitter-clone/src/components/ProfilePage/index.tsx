import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Rodrigo Rael</h1>
        <h2>@rodrigo_rael</h2>

        <p>
          Developer FullStack at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          
          <li>
            <CakeIcon />
            Nacido em 04 de abril de 2004
          </li>

        </ul>

        <Followage>
          <span>
            seguindo <strong>80</strong>
          </span>
          <span>
            <strong>800 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};
export default ProfilePage;