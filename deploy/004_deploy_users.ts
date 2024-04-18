import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";

const deployUsers: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment,
) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy, execute} = deployments;
    const {admin} = await getNamedAccounts();
    await deploy("HiveUsers", {
        from: admin,
        args: [],
        log: true,
    });
    await execute(
        "HiveUsers",
        {
            from: admin,
            log: true,
        },
        "initialize",
    );
    return true;
};

deployUsers.id = "deployUsers";

export default deployUsers;
