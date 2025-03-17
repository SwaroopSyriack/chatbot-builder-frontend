const DashboardHeader =  () => {
    const issubcribed = true;

    return(
        <div className="header">
        <div className="header-content">
          <div className="welcome-text">
            <h1>Welcome to ForgeAgents syriack!</h1>
            {issubcribed && <p>Ready to unleash the full power of forgeAgents? Upgrade your account today and unlock premium features!</p>}
          </div>
          {issubcribed ? <button className="upgrade-button">Upgrade</button> : ''}
        </div>
        <hr className="divider" />
      </div>
    )

};

export default DashboardHeader;