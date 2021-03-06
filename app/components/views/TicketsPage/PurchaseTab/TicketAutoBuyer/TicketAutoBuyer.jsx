import { TicketAutoBuyerForm } from "shared";
import { useTicketAutoBuyer } from "./hooks";
import { VSPSelect } from "inputs";

function TicketAutoBuyer() {
  const {
    balanceToMaintain,
    setBalanceToMaintain,
    account,
    setAccount,
    vsp,
    setVsp,
    availableVSPs,
    isRunning,
    notMixedAccounts,
    getRunningIndicator,
    clicked,
    isValid,
    isSettingsModalVisible,
    showSettingsModal,
    hideSettingsModal,
    onClick,
    onStartAutoBuyer,
    onStopAutoBuyer,
    onSaveAutoBuyerSettings,
    vspHost
  } = useTicketAutoBuyer();

  const VSPSelectControl = (
    <VSPSelect options={availableVSPs} value={vsp} onChange={setVsp} />
  );

  return (
    <TicketAutoBuyerForm
      {...{
        onStartAutoBuyer,
        onStopAutoBuyer,
        isRunning,
        balanceToMaintain,
        setBalanceToMaintain,
        account,
        setAccount,
        vsp,
        isValid,
        onClick,
        clicked,
        notMixedAccounts,
        getRunningIndicator,
        onSaveAutoBuyerSettings,
        isSettingsModalVisible,
        showSettingsModal,
        hideSettingsModal,
        VSPSelectControl,
        vspHost
      }}
    />
  );
}

export default TicketAutoBuyer;
