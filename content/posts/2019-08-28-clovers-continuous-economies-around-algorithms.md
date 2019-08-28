---
template: post
title: Clovers & Continuous Economies Around Algorithms
slug: clovers-and-continuous-economies
draft: false
date: 2019-08-28T11:47:15.079Z
description: >-
  I'm really happy to see Clovers finally go live!


  It's a blockchain application where you collect unique patterns of finished
  games of Othello (called Clovers). The most prized ones are those that exhibit
  symmetry. It's fun, quirky, nerdy, arty, but interestingly: a step forward in
  building economies around algorithms themselves.
category: IDEAS
tags:
  - blockhain
  - art
  - bonding curves
  - economics
  - clovers
---
I'm really happy to see Clovers finally go live!

It's a blockchain application where you collect unique patterns of finished games of Othello (called Clovers). The most prized ones are those that exhibit symmetry. It's fun, quirky, nerdy, arty, but interestingly: a step forward in building economies around algorithms themselves.

It works as follows:

\- Users generate Clovers in their browser (it plays games of Othello to their ends). 

\- If they find ones they like (including rare, symmetrical ones), they can claim it for themselves or receive a reward for it (if it's a rare Clover).

\- Rewards: If it's a rare Clover (symmetrical), one can opt to receive a reward for it. This reward is paid by inflating a token (Clover coins) that is redeemable for some collateral (ETH).

\- This rare Clover is then put into the market for someone else to buy.

\- Claiming: If one wants to claim a Clover (at a cost in Clover coins), one can do so. This sends a transaction to the blockchain, effectively minting the unique Clover. The Clover coins are then removed from circulation (deflating the supply).

\- If users want to claim Clovers without doing the work of generating symmetrical Clovers, they can instead buy Clover coins by putting in ETH as collateral, the price of which is automatically set by a token bonding curve (continuous token model).

Users can buy/sell/trade/collect their Clovers as they wish.

Go play it! It's fun. :)

<https://clovers.network>

![](/media/screenshot-2019-08-28-13.51.57.png)

\---

Besides the nerdy & arty appeal of collecting these unique patterns, it is uniquely enabled through a continuous token bonding curve economy. In other words, a separate token (Clover coins) is used within its economy that is backed by ETH as collateral. Supply is inflated/deflated through various actions. 

Supply is inflated when:

\- You put ETH up as collateral (user receives new Clover coins in return according to the hardcoded price curve).

\- A symmetrical clover is found and the user chooses it as reward.

Supply is deflated when:

\- A Clover is claimed. It is merely removed from circulation, with no ETH going out of the collateral.

\- Clover coins are sold at the hardcoded price set by the bonding curve (users gets ETH in return).

A question one could ask: could this economy work with only ETH? Is another token necessary?

Yes, and no.

Consider this version where it is percentage-only model (no Clover coins) which could potentially produce similar economic outcomes:

ETH is initialised into a pool. Upon finding a symmetrical Clover, the user can be rewarded with some ETH (NOT Clover coins). If a Clover is to be claimed and minted, ETH is paid for it into the pool (instead of Clover coins being burned (deflating supply)).

In a similar way to how Clover coins are nominally hardcoded for claims and rewards, so too would the percentage of ETH coming out or into the pool. The incentives would be similar: if the economy is larger, it rewards the production of Clovers by attracting new 'miners' that run simulated games of Othello. If percentage-only model is used, the economy can continue to function. It would just mean that ETH would essentially never be fully depleted.

So: you could get similar economic outcomes through only using ETH and rewarding/claiming by using percentages of this pool. Miners are rewarded with ETH from it and when people claim Clovers, the ETH goes into the pool.

In other words: 

\- to be rewarded for a Clover, you receive, for example, 0.0005 percent of ETH.

\- to claim a Clover, you must pay, 0.0006 percent of the current ETH in the pool.

\- This is sequentially executed.

This \*could\* generate a reasonable economy, but, you do lose some features by having a separate token.

\- People shift to holding onto their new Clovers (keeping it solved, but minting it) because it represents the claim on the collateral, not a Clover coin. This is a negative feedback to the economy because Clovers aren't then coming into being (which could be economically a non-starter).

\- You don't have the ability to make future claims on this economy (a large part of the value of token bonding curves).

\- You don't get coordination value by having a separate collectible itself (Clover coins as Schelling point for coordination around the economy of Clovers).

\- Emergence: being able to extend the economy of Clovers.

The latter part is still open and ripe for experimentation: 

\- what if you Clover coins could be used to stake to Clovers on topics (eg best umbrellas), ranking them, producing a simple curation market?

\- what if you could combine Clovers into larger grids in order to draw with them? To do this, you stake some Clover coins along with a burn fee to combine them into 2x2, 3x3, 4x4 grids. You can disband them later on.

\- when speaking to Billy about it, he mentioned that possibility of using Harberger-based ads for showcasing ([https://blog.simondlr.com/harberger-tax-and-the-blockchain).](https://blog.simondlr.com/harberger-tax-and-the-blockchain)

\- another feature is bounties for the production of specific Clovers (also mentioned by Billy).

**Continuos Algorithmic Economies**

When I first spoke about [continuous token models back in early 2017](https://media.consensys.net/exploring-continuous-token-models-towards-a-million-networks-of-value-fff153175776) (before the big ICO boom), this is exactly what I hoped to see: a simple, continuous, token-backed economy that is only as big as it needs to be. It does not need a huge investment alongside the production of some new fixed-supply currency/token.

At the end of the day, what's great about Clovers and the usage of a continuous token bonding curve is that it illustrates how a market-based approach can result in the production of an economy that doesn't have to be a billion dollars and that can facilitate simple goals that people can coordinate around. In this case: finding symmetry in games of Othello. If the economy deflates and several thousand Clovers came out of it, it worked. There's no zombie economy anymore that one has seen in other fixed-supply cryptocurrencies. It grows as wanted. It deflates as needed.

Instead of using this market-based approach, one \*could\* task a simulation to do this. Run countless simulations of games of Othello and find these interesting patterns on AWS.

However, by adding in the ability to collect these unique patterns, and building an automated economy through a token model, it generates incentives such that many interested parties collectively search for optimizing the function: the most interesting symmetrical end state of Othello.

It means that more people expend their own resources towards this goal, allowing the pursuit of this goal to persist longer than one person doing it on their own. The incentives itself collects latent energy towards the common goal.

What's great about where the industry has developed is the ability to model, simulate and understand these new economies on a level above and beyond conjecture (and people like that just write about it).

[cadCAD was used to model the economy](https://github.com/BlockScience/cadCAD). 

(which, btw, [has been open sourced at Token Engineering Global gathering](https://www.youtube.com/watch?v=tFcSqKXfCuE&feature=youtu.be&t=29445) recently thanks to the [Commons Stack](https://commonsstack.org/) team).

You can see the results of it here:

<https://github.com/clovers-network/clovers-cadCAD/blob/master/src/Clovers%20Network%20Token%20Simulations.ipynb>

![](/media/screenshot-2019-08-28-11.36.10.png)

Billy also gave a talk about it. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/5Eg360OC6Qg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What's interesting is to potentially extrapolate and wonder if this model could facilitate general economies around algorithms themselves, where the optimization function differs from what see in Clovers (finding symmetry in Othello). You can produce other continuous algorithmically generative economies. I feel a pattern is very close that could used and re-used for other optimization functions.

For example: one can task 'workers' to find solutions that improve a machine learning model (similar to [OpenMined](https://www.openmined.org/)). 

![](/media/screenshot-2019-08-28-13.57.58.png)

Instead of the demand coming from collecting, it could represent ownership in the algorithm itself. If the algorithm is used, it gets paid, and those that optimized the function can claim this revenue. eg -> you are rewarded from improving the algorithm AND then if it gets used, you receive additional potential revenue. If enabled through a bonding curve: you inflate the token to reward workers. Then: buyers must either take some of the algo's tokens out of circulation (like Clovers) OR pay into the underlying collateral in order to use the algorithm.

It doesn't seem 100% there yet for a generic model, since you still need verification of usage. In Clover's case, usage/verification is internal in the system -> people buy and collect the solutions to the problem ('find symmetry in Othello'). If an algorithm is used externally, it will need to be verified and paid for. Perhaps this is where protocols like [Ocean](https://oceanprotocol.com) can come in to play.

All-in-all, a fun, arty, nerdy game that underneath shows a lot of promise for building new economies, uniquely enabled by blockchain technology.

![](/media/screenshot-2019-08-21-09.02.04.png)

_Disclaimer: I'm an advisor to Ocean Protocol._
