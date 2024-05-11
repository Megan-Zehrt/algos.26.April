// 559. Maximum Depth of N-ary Tree

// Given a n-ary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    function dfs(node){

        let localDepth = 0

        if(node === null){
            return 0
        }

        for(child of node.children){
            localDepth = Math.max(localDepth, dfs(child))
        }

        return localDepth+1
    }

    return dfs(root)
};