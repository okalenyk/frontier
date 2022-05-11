(function() {var implementors = {};
implementors["fc_rpc"] = [{"text":"impl&lt;B, C&gt; <a class=\"trait\" href=\"fc_rpc/trait.Web3Api.html\" title=\"trait fc_rpc::Web3Api\">Web3Api</a> for <a class=\"struct\" href=\"fc_rpc/struct.Web3.html\" title=\"struct fc_rpc::Web3\">Web3</a>&lt;B, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: BlockT&lt;Hash = H256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: HeaderBackend&lt;B&gt; + ProvideRuntimeApi&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::Api: <a class=\"trait\" href=\"fp_rpc/trait.EthereumRuntimeRPCApi.html\" title=\"trait fp_rpc::EthereumRuntimeRPCApi\">EthereumRuntimeRPCApi</a>&lt;B&gt;,&nbsp;</span>","synthetic":false,"types":["fc_rpc::web3::Web3"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()