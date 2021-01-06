(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[133],{713:function(e,n){e.exports={title:"1.6.36 Release",description:"Improved farming timer estimations and Zalcano damage counter",author:"Adam",body:'<p>The time tracking plugin now keeps track of when each account\'s farming tick\nhappens and can use it to give much more precise estimations of when crops are\ndone growing. To do this it must first observe a tree growing.</p>\n<p><img src="/img/blog/1.6.36-Release/farm-timer.png" alt="Farming timer"></p>\n<p>The Zalcano plugin now includes a damage counter to track how much damage you\nhave done to the health and shield, to let you easily track if you\'ve done\nenough damage to be eligible for drops, uniques, or the pet.</p>\n<p><img src="/img/blog/1.6.36-Release/zalcano-dmg.png" alt="Zalcano damage counter"></p>\n<p>Many of the existing color configuration options for overlays now support\nadjusting their transparency too.</p>\n<p><img src="/img/blog/1.6.36-Release/alpha.png" alt="Zalcano damage counter"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Texture brightness with the GPU plugin has been adjusted to more closely\nreflect the software rasterizer</li>\n<li>FPS with GPU on in areas with full-screen transparent overlays, such as\nGodwars, under water, and Ver Sinhaza has been improved</li>\n<li>The xp tracker now respects the in-game xp tracker position setting</li>\n<li>Fix some dead clicks when trying to alt+drag or alt+reset overlays</li>\n<li>Fix item overlays, such as the rune pouch or item identification overlays,\nfrom drawing over top the world map</li>\n<li>The barrows reward potential overlay colors are now exact and no longer an estimation</li>\n<li>Fix the Ape Atoll skull climb obstacle click box overlay</li>\n<li>Mouse tooltips now work on the welcome screen and the full screen world map</li>\n<li>The multicombat icon is now movable when holding alt</li>\n<li>The status bars health bar is now recolored when infected by a parasite</li>\n<li>Timers have been added to the green Tears of Guthix streams</li>\n<li>The Sire stun timer now more accurately tracks when the Sire is stunned while\nalready stunned</li>\n<li>Fix the essence teleport menu swap for Sedridor</li>\n<li>Fix the Charge spell timer time to be 7 minutes</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 19 contributors this release!</p>\n<pre><code>Adam (31):\n      barrows: fix reward potential color overlay\n      twitch: fix npe closing client if no socket has been created\n      widget overlay: use the in-game configured position for the xptracker widget\n      devtools: assign unique names to debug infoboxes\n      overlay renderer: set currentManagedOverlay also when clicking\n      Allow overlay renderer to restrict overlay parent bounds\n      ci: use mvn verify phase instead of install\n      api: remove getViewportWidget()\n      overlay renderer: use viewport bounds for snap corner offsets\n      Rename various itemWidget to widgetItem to match class name\n      Add interface and layer draw hooks for overlays\n      wiki: use script post fired event for hiding wiki banner\n      timers: use pvp varbit to clear teleblock timer\n      Remove ITEM_DROP menu action\n      menu entry swapper: replace some client.getItemDefinition calls with itemManager.getItemComposition\n      menu entry swapper: refactor configure shift click menu code to use menu types and ids\n      ping: place IcmpCloseHandle in finally\n      api: remove WidgetHiddenChanged\n      ge plugin: better handle trades updating on login\n      ge: add user agent to trade message\n      ge: add trade seq number\n      ge: submit buy limit reset time\n      Allow mouse tooltips on the welcome screen and full screen world map\n      comp_unordered.glsl: don\'t orient vertices\n      gpu: move calculateExtreme() after visibility check\n      gpu: correctly set model height on non-model renderables\n      gpu: draw full screen widgets on gpu\n      client: bind runelite.properties to guice\n      gpu: dispatch compute after scene draw\n      perspective: ignore invisible tris in clickbox calculation\n      gpu: fix lighting textures\n\nBroooklyn (2):\n      discord: add a few missing regions\n      item identification: add Jungle Potion herbs\n\nCGOSURLDEV (1):\n      ge plugin: update config descriptions to be more descriptive\n\nChristian Gati (1):\n      Add Green Tears of Guthix Timer (#12862)\n\nFjara - Choppe (1):\n      agilityshortcut: fix Neitiznot Bridge agility level requirements\n\nHydrox6 (1):\n      WidgetOverlay: Make Multicombat Indicator moveable\n\nJordan Atwood (1):\n      itemstats: Add Darkmeyer foods\n\nKoanga (1):\n      item prices: fix evalulating large platinum token stack prices\n\nMalfuryent (1):\n      statusbarplugin: Recolor health bar when infected by a parasite (#12874)\n\nMax Weber (4):\n      config/PluginHubPanel: show uninstall ui feedback when in safe mode\n      music: fix channel mute op name\n      runelite-api: add WidgetClosed event\n      runelite-api: add WidgetNode::modalMode\n\nMinhs2 (1):\n      skill calc: add 4 dose potions\n\nMorgan Lewis (3):\n      Add additional areas to FarmingRegions\n      Add Health Check data to PatchImplementation.java\n      Add farming tick offset to time tracking plugin\n\nMrnice98 (1):\n      timers: use chat message for sire stun timer\n\nPaul Norton (2):\n      Add &quot;scorched&quot; Lletya regionID recognition to TimeTracking\'s FarmingWorld\n      Add scorched Lletya region ID to discord presence determination\n\nPaveldin (1):\n      fishing: Add crystal and trailblazer harpoon to fishing tool list (#12829)\n\nUsman Akhtar (1):\n      menu entry swapper: fix swap for sedridor\n\ndekvall (2):\n      zalcano: add damage counter\n      sponsors: add patreon link\n\nemerald000 (1):\n      timers: change Charge time to 7 minutes\n\npilino1234 (1):\n      Add alpha channel to color config options where applicable\n</code></pre>\n'}}}]);
//# sourceMappingURL=133.b547d33e.chunk.js.map