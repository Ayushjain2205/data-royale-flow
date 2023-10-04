const StatsInfo = ({ label, icon, value }) => (
  <div
    data-tip={label}
    className="flex items-center tooltip gap-[8px] text-[#9381FF]"
  >
    <i className={`fa-solid ${icon}`}></i>
    <span>{value}</span>
  </div>
);

export default StatsInfo;
