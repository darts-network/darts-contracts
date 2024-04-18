import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";

const deployStorage: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment,
) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy, execute} = deployments;
    const {admin} = await getNamedAccounts();
    await deploy("HiveStorage", {
        from: admin,
        args: [],
        log: true,
    });
    await execute(
        "HiveStorage",
        {
            from: admin,
            log: true,
        },
        "initialize",
    );
    return true;
};

deployStorage.id = "deployStorage";

export default deployStorage;
