import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TestERC20", (m) => {
  const address = "0x28eb8D29e4713E211D1dDab19dF3de16086BB8fa";
  const token = m.contract("TestERC20", [address]);

  return { token };
});
