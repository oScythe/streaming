/**
 * @name Streaming
 * @description This plugin enables the 1080p 60FPS streaming feature which is only available for Nitro users.
 * @version 1.0.0
 * @author OBNinjaa
 * @updateUrl https://dsc.gg/wolkig
 */

// config
const config = {
  info: {
    name: "Streaming",
    id: "streaming",
    description: "This plugin enables the 1080p 60FPS streaming feature which is only available for Nitro users.",
    version: "1.0.0",
    author: "OBNinjaa",
    updateUrl: "https://dsc.gg/wolkig",
  },
};

module.exports = class test {
  getName() {
    return config.info.name;
  }
  getAuthor() {
    return config.info.author;
  }
  getVersion() {
    return config.info.version;
  }
  getDescription() {
    return config.info.description;
  }

  load() {}
  start() {
    BdApi.showNotice(`There is a new version of ${config.info.name} ready to update!`, {
      type: "error",
      buttons: [
        {
          label: "Manual Update",
          onClick: () => window.open("https://github.com/oScythe"),
        },
      ],
    });
    window.webpackChunkdiscord_app.push([
      [Math.random()],
      {},
      (req) => {
        for (const m of Object.keys(req.c)
          .map((x) => req.c[x].exports)
          .filter((x) => x)) {
          if (m.default && m.default.getCurrentUser !== undefined) {
            console.log(`[${config.info.name}] Has been loaded`);
            return (m.default.getCurrentUser().premiumType = 2);
          }
        }
      },
    ]);
    let wpRequire;
    window.webpackChunkdiscord_app.push([
      [Math.random()],
      {},
      (req) => {
        wpRequire = req;
      },
    ]);
    let mod = Object.values(wpRequire.c).find((x) => typeof x?.exports?.Z?.isDeveloper !== "undefined");
    let usermod = Object.values(wpRequire.c).find((x) => x?.exports?.default?.getUsers);
    let nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes);
    try {
      nodes.find((x) => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: { flags: 1 } });
    } catch (e) {}
    let oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
    usermod.exports.default.__proto__.getCurrentUser = () => ({ hasFlag: () => true });
    nodes.find((x) => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
    usermod.exports.default.__proto__.getCurrentUser = oldGetUser;
  }
  stop() {
    window.webpackChunkdiscord_app.push([
      [Math.random()],
      {},
      (req) => {
        for (const m of Object.keys(req.c)
          .map((x) => req.c[x].exports)
          .filter((x) => x)) {
          if (m.default && m.default.getCurrentUser !== undefined) {
            console.log(`[${config.info.name}] Has been unloaded`);
            return (m.default.getCurrentUser().premiumType = 3);
          }
        }
      },
    ]);
  }
};
