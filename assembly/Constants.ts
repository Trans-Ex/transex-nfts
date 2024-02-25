import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Trans.Ex";
  export const SYMBOL: string = "TRSX";
  export const MINT_PRICE: u64 = 8588500000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 111;
  export const URI: string = "https://salmon-negative-koi-521.mypinata.cloud/ipfs/QmSGTypK3mVm8hSxd2eBA9LziZ3r7iJ8iamyTNag6wpLsK";
  export const OWNER: Uint8Array = Base58.decode("1CXSeGtcUTXH6pSCCF5FpPC5HgYJSbJEvs");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("14dpibwJrMJUDBMCPVrbGrz3P2iX52ecDh");
}