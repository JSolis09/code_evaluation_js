import './CurrentStatus.scss';
import { useSelector } from 'react-redux';
import infoLogo from "../../assets/info.svg";
import arrow from "../../assets/arrow.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import Status from './status/Status';
import { useEffect, useRef, useState } from 'react';

const CurrenStatus = () => {
  const listRef = useRef();
  const statusList = useSelector((state) => state.app.statusList);
  const isScrollable = (el) => el?.scrollHeight > el?.clientHeight;
  const [hasScroll, setHasScroll] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpandSection = () => setIsExpanded(!isExpanded);

  const scrollTo = () => {
    listRef?.current?.scrollTo({
      top: listRef?.current?.scrollTop + 42,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setHasScroll(isScrollable(listRef?.current));
  }, [listRef]);

  return (
    <div data-testid="currentStatus" className={`h-currentStatus ${!isExpanded ? 'h-currentStatus--collapsed' : ''}`}>
      <header className="h-currentStatus__title">
        <span>Current status</span>
        <img src={infoLogo} className="h-currentStatus__title-icon" alt="info_logo" />
      </header>
      <div
        data-testid="statusList"
        ref={listRef}
        className={`h-currentStatus__list ${hasScroll ? 'h-currentStatus__list--scroll': ''}`
      }>
        {statusList.map((v) => <Status key={v.id} isExpanded={isExpanded} {...v} />)}
        {hasScroll && (
          <button className="h-currentStatus__expand-more" onClick={scrollTo}>
            <img src={arrow} alt="expand more" />
          </button>
        )}
      </div>
      <button data-testid="btn-expand" className="h-currentStatus__btn-expand" onClick={toggleExpandSection}>
        <img
          src={isExpanded ? arrowLeft : arrowRight}
          alt={`${isExpanded ? 'Colapsed icon' : 'expanded icon'}`}
        />
      </button>
    </div>
  );
}

export default CurrenStatus;
