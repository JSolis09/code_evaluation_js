import { memo } from 'react';
import PropTypes from "prop-types";
import infoLogo from "../../../assets/info.svg";
import './Status.scss';

const getStatusContainerClassnames = (noBorderRadius, isExpanded) => {
  let classnames = `h-status ${!isExpanded ? 'h-status--collapsed' :  'h-status--expanded'}`;
  if (noBorderRadius) {
    classnames += ` no-radius-${noBorderRadius}`;
  }
  return classnames;
};

const Status = ({ text,  caption, variant, hasInfo, noBorderRadius, isExpanded }) => (
  <div
    data-testid="status"
    className={getStatusContainerClassnames(noBorderRadius, isExpanded)}
  >
    <span className="h-status__text">{text}</span>
    <div className="h-status__right">
      <span className={`h-status__caption ${variant}`}>{caption}</span>
      {hasInfo && <img src={infoLogo} className="h-status__info" alt="info_logo" />}
    </div>
  </div>
);

Status.propTypes = {
  text: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'measurement', 'warning']),
  noBorderRadius: PropTypes.oneOf(['top', 'bottom']),
  isExpanded: PropTypes.bool,
};

Status.defaultProps = {
  text: '',
  caption: '',
};

export default memo(Status);