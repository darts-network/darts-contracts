import Wallet from "ethereumjs-wallet";

const generate = (name: string) => {
    let envPrefix= process.env.ENV_PREFIX || "export "
    // envPrefix="export "
    if (envPrefix.trim()=="") {
        envPrefix = "";
    }
    const wallet = Wallet.generate();
    let primaryKey = wallet.getPrivateKeyString()
    primaryKey = `\${${name}_PRIVATE_KEY}`
    console.log(`${envPrefix}${name}_PRIVATE_KEY=${wallet.getPrivateKeyString()}`);
    if(name=="ADMIN"){
        console.log(`${envPrefix}PRIVATE_KEY=${primaryKey}`);
        console.log(`${envPrefix}WEB3_PRIVATE_KEY=${primaryKey}`);
        console.log(`${envPrefix}HIVE_PRIVATE_KEY=${primaryKey}`);
    }
    if(name=="RESOURCE_PROVIDER"){
        // console.log(`${envPrefix}RP_PRIVATE_KEY=$${name}_PRIVATE_KEY`)
        console.log(`${envPrefix}RP_PRIVATE_KEY=${primaryKey}`)
    }
    if(name=="JOB_CREATOR"){
        // console.log(`${envPrefix}JC_PRIVATE_KEY=$${name}_PRIVATE_KEY`)
        console.log(`${envPrefix}JC_PRIVATE_KEY=${primaryKey}`)
    }

    // console.log(`${envPrefix}${name}_ADDRESS=${wallet.getAddressString()}`);
};

async function main() {
    generate("ADMIN");
    generate("FAUCET");
    generate("SOLVER");
    generate("MEDIATOR");
    generate("RESOURCE_PROVIDER");
    generate("JOB_CREATOR");
    // generate("DIRECTORY");

    console.log("\n\n");

    console.log(`GENERATED_ON="${new Date()}"`);
    console.log(`GENERATION_COMPLETED_AT="${new Date().toLocaleString()}"`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
