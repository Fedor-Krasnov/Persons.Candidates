import React from 'react';
import { Title } from '../../units';
import { UserCard } from '../../UserCard';
import candidatesStyles from './Candidates.module.scss';

const candidatesClassName = 'candidates';

const Candidates = ({ content }) => {
  const { title } = content;

  return (
    <section className={candidatesStyles[candidatesClassName]}>
      <Title className={candidatesStyles[`${candidatesClassName}__title`]} title={title} />
      <div className={candidatesStyles[`${candidatesClassName}__container`]}>
        <UserCard />
      </div>
    </section>
  );
};

export { Candidates };
