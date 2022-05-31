import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, GameTitle, Input } from '../../components';

import './Home.css';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Start', username);
    navigate('/play');
  };

  return (
    <div className="container mx-auto">
      <GameTitle />
      <div className="flex flex-col border-4 border-blue-blizzard items-center p-8">
        <Link className="font-bold mb-8 text-2xl underline" to="how-to-play">
          How to Play
        </Link>
        <form
          className="flex flex-col items-center"
          id="user-form"
          onSubmit={handleSubmit}
        >
          <div className="mb-8">
            <label className="font-bold text-lg" htmlFor="username">
              Player Name
            </label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a username..."
            />
          </div>
          <Button label="Join a Game" size="lg" type="submit" />
        </form>
      </div>
    </div>
  );
};
