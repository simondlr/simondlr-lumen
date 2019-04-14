---
template: post
title: "Tokens 2.0: Curved Token Bonding in Curation\_Markets"
slug: curved-token-bonding-in-curation-markets
draft: false
date: 2017-11-21T09:15:23.354Z
description: >-
  Since introducing Curation Markets in earnest earlier this year, quite a few
  projects have started adopting some of the designs. Curation Markets is a set
  of protocol designs that aims to reduce information asymmetry through the use
  of tokenized signals. Tokens are minted as needed through a continuous token
  model. Within the projects announced the past few months, the most important
  facet from Curation Markets that these projects are adopting is the continuous
  token bonding curve.
category: IDEAS
tags:
  - economics
  - blockchain
  - tokens
  - bonding curves
---
Since introducing Curation Markets in earnest earlier this year, quite a few projects have started adopting some of the designs.

Curation Markets is a set of protocol designs that aims to reduce information asymmetry through the use of tokenized signals. Tokens are minted as needed through a continuous token model.

https://medium.com/@simondlr/introducing-curation-markets-trade-popularity-of-memes-information-with-code-70bf6fed9881

In the post above, I described some scenarios where I see Curation Markets could be useful for, from monetizing and governing any open source project to trading dank memes.

Within the projects announced the past few months, the most important facet from Curation Markets that these projects are adopting is the continuous token bonding curve. They are adopting it a level much more granular than I expected.

**Bonding Curves & Pools**

A Curved Bonded Token with similar buy (in) & sell (out) curves.The basic premise of curved bonding is as follows:

With a specific token (eg ETH), you can buy a new token (eg #projectToken) through a smart contract. The ETH is kept as deposit within the smart contract. It's not disbursed to any particular person or team.

The buy price is determined by the current supply of the new token (#projectToken). The buy price is hardcoded according to some algorithmic curve.

At any point in time, someone can sell back their #projectToken into the communal pool and get out an appropriate reward that is set by a sell curve.

![](/media/1_icgahzwldeqzjm-dsjztbw.png)

This setup means that #projectTokens will form and dissolve as necessary. If everyone leaves, all ETH will be refunded and all #projectTokens will cease to exist. If you buy in early, you will get more tokens for the same price. If you buy in later, you will get less tokens for the same price. If you sell back into the pool, you will get less ETH per token vs selling back into the pool when the outstanding supply is higher.

The value derived from curved bonding is that it rewards participants for being early and buying tokens in that project. If they leave at a later point, selling their #projectTokens back into the communal pool will net them a reward. The reason you want separate tokens for separate projects is so that it more easily fits the value being produced from these separate projects. The crypto-economic feedback loops necessary to sustain certain systems will only work if the value being produced is mapped to its own token. For more info, read here:

https://medium.com/@simondlr/history-is-rhyming-fitness-functions-comparing-blockchain-tokens-to-the-web-3c117239f4c

Besides the value of bonding commitments & tokenized signalling afforded by bonding curves, it's still up to the specific project what these #projectTokens will be used for. Using bonding curves alongside other feedback loops gets even more interesting (more on this later).

For example, I describe the usage of curved bonding in the proliferation of thousands of token-curated registries here:

https://medium.com/@simondlr/continuous-token-curated-registries-the-infinity-of-lists-69024c9eb70d

Bonding Curves doesn't necessarily need the same curves to get in and out. It depends on the goals of the project. For example, the original Curation Markets designs has a specific algorithmic curve going in, but has a different algorithmic curve out. The curve going out is just based on the total percentage of tokens being sold back into the pool. It's not based on a different curve.

In other words, it would like like this almost:

![](/media/1_jh-yf3xprslkl_dzpsb7ka.png)

Over time, the gap between the ceiling (buying in) and floor (selling out) will get larger. The value of this, for example, is that if the floor is not mapped 100% to the ceiling, it means that buyers aren't immediately in a profit as soon as new participants enter. They have to keep the tokens for a certain period to ensure they are in a profit (in case they want to exit).

These curves are currently exponential curves in order to incentivize early adopters, but it also doesn't mean that it has to exponential. They can also be linear if there's a belief that exponential curves will cause unnecessary churn at critical mass.

![](/media/1_ldwpdij6xfpw3w_7qf9fzq.png)

The projects that have been announced use bonding curves in the following manners:

**Meme Factory: A Game of Curation & The Trading of Dank Memes**

Meme Factory from District0x will be a game where users can create dank memes and bond tokens to each meme according to its own bonding curve. This becomes a game where users then bet on the popularity of each meme. Bonded early to a dank meme and got out at the top? You successfully traded a dank meme and just made a profit.

The question each time is: do you think this meme is dank and funny enough that others will want to bet after you on this too?

Ultimately, whilst this game is being played, these memes are also being curated themselves: more tokens bonded to a meme is a signal that is a funnier meme than a meme with fewer bonded tokens. This is an emergent outcome.

**Ocean Protocol: Curating Data in Data Exchange**

Ocean Protocol is a decentralized data exchange protocol. Ocean Protocol provides a clever use case of where there are external feedback loops attached to bonding curves.

On the surface level, bonding curves are used here to rank datasets. The stakes are a signal on the future popularity of the data. A Keeper (equivalent to a miner essentially) in this protocol earns from serving up the datasets. If they have staked tokens towards the datasets when they serve it, they earn more rewards. If they don't make it available when asked they lose their bonds in the datasets.

**1Hive: Project Funding**

1Hive is District0x proposal where the communal pool also becomes accessible to a beneficiary (with for example, smart contract-based vesting schedules). It's a novel type crowdfunding that incorporates the act of curating necessary and important projects, but also rewarding investors for bonding towards different ideas and projects.

The fact that investors & the beneficiaries have access to the same communal pool helps both parties stay more accountable towards each other. If the beneficiary misbehaves, the funders can exit and thus it reduce the pool available to the beneficiary.

**Zap Store: Decentralized Data Feed Access & Curation**

Zap Store uses bonding curves to oracles in blockchains. Using their ZAP token, bonding to an oracle will produce 'dots' which is then used to query data from oracles. As is the case with bonding curves, these 'dots' can be sold back into ZAP.

**OSCoin: Open Source Governance**

OSCoin is a project that aims to bring Curation Markets (and thus bonding curves) to open source governance, creating micro-economies around the production of open source software.

Using bonding curves, the economy and governance around an open source project can exist at the project level or more granularly: per issue. This fractal bonding can be interesting in its own right.

eg -> ETH -> OSCoin -> ProjectToken -> MilestoneToken -> IssueToken, etc.

How these bonding games will be played is uncertain. The barrier to entry to creating a bonding curve might be low enough that it becomes valuable to go as granular as above.

**Emergent Mitosis**

An emergent outcome of these kind of crypto-economic primitives is that it can be re-used with almost every existing token out there, without permission. For example, if open source governance become a use case with bonding curves, then you can take any of the current tokens out there and start bonding it everywhere. eg, Use GNO (from Gnosis) to bond to an issue on their github (creating #issue137Token), signalling that it's important to take a look at that issue.

Or use GNO tokens to trade memes around that community? Use GNO to surface interesting projects that use prediction markets?

It's also possible that the same piece of information that's being bonded to, can be bonded from, from various tokens. For example, many open source projects use the same underlying infrastructure, and they have their own bonding games on shared infrastructure. eg, REP, GNO, ETH, etc, all bonding tokens towards the development and signalling of sharding research for Ethereum.

Using protocols like Bancor, these bonding curves can even potentially use many different tokens for ONE curve. eg, many tokens in & one token out.

The possibilities become quite powerful.

**Conclusion:**

Bonding curves is a core component of Curation Markets. It's been interesting to see it adopted as the key feature from Curation Markets. It's the opposite of the current ICO landscape, relying on once-off token sales that do not always provide the best incentives towards the teams and the buyers of the tokens.

It will be interesting to see what develops. Will there be many bonding curves? What will the curves look like? In this article about Zap, they posit the same: http://www.newsbtc.com/2017/11/01/zap-fun-profit/

> "In time, users will discover and gravitate toward bonding variables that incentivize both truth and profit, and in the process potentially discovering entirely novel cryptoeconomic mechanisms."

As I wrote up in February of this year on the topic of continuous token models, I think once these crypto-economic primitives work, we are still set on seeing the proliferation of many, many more tokens out there. We've decreased the barrier to entry to substantially experiment with this and create new coordination & commitment systems.

2018 is going to be exciting.

**Thanks:**

Thanks to Zap Store for inventing the name 'bonding curves' after researching Curation Markets. It's an apt description of the protocol.
