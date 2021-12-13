import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container mt-5">
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://github.com/miniengineer" target="_blank" rel="noopener noreferrer">
          Mini
        </a>
      </footer>
    </div>
  );
};

export default Container;
